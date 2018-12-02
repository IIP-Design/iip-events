<?php

class IIP_Events {

  /**
   * The loader that's responsible for maintaining and registering all hooks that power the plugin.
   *
   * @since    0.0.1
   * @access   protected
   * @var      IIP_Events_Loader    $loader    Maintains and registers all hooks for the plugin.
   */

  protected $loader;

  /**
   * The unique identifier and version of this plugin.
   *
   * @since    0.0.1
   * @access   protected
   */

  protected $plugin_name;
  protected $version;

  /**
   * Define the core functionality of the plugin.
   *
   * Set the plugin name and the plugin version that can be used throughout the plugin.
   * Load the dependencies and set the hooks for the admin area and
   * the public-facing side of the site.
   *
   * @since    0.0.1
   */

  public function __construct() {
    $this->plugin_name = 'iip-events';
    $this->version = '0.0.1';
    $this->load_dependencies();
    $this->define_admin_hooks();
    $this->define_public_hooks();
  }

  /**
   * Load the required dependencies for this plugin.
   *
   * Include the following files that make up the plugin:
   *
   * - IIP_Events\Loader. Orchestrates the hooks of the plugin.
   * - IIP_Events\Admin. Defines all hooks for the admin area.
   * - IIP_Events\Frontend. Defines all hooks for the public side of the site.
   *
   * Create an instance of the loader which will be used to register the hooks with WordPress.
   *
   * @since    0.0.1
   * @access   private
   */

  private function load_dependencies() {
    // The class responsible for orchestrating the actions and filters of the core plugin.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-iip-events-loader.php';

    // The class responsible for defining all actions that occur in the admin area.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-iip-events-admin.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-iip-events-api.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-iip-events-cpt.php';

    // The class responsible for defining all actions that occur in the public-facing side of the site.
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-iip-events-public.php';
    $this->loader = new IIP_Events\Loader();
  }

  // Register all of the hooks related to the admin area functionality of the plugin.
  private function define_admin_hooks() {
    $plugin_admin = new IIP_Events\Admin( $this->get_plugin_name(), $this->get_version() );
    $plugin_api = new IIP_Events\API();
    $plugin_cpt = new IIP_Events\Custom_Post_Type( $this->get_plugin_name(), $this->get_version() );

    // Admin hooks
    $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_iip_events_admin' );
    $this->loader->add_action( 'admin_notices', $plugin_admin, 'localize_event_variables' );
    // API hooks
    $this->loader->add_action( 'rest_api_init', $plugin_api, 'create_event_endpoint' );
    // Custom post type hooks
    $this->loader->add_action( 'init', $plugin_cpt, 'create_event_post_type' );
  }

  // Register all of the hooks related to the public-facing functionality
  private function define_public_hooks() {
    $plugin_frontend = new IIP_Events\Frontend( $this->get_plugin_name(), $this->get_version() );

    // Frontend hooks
    $this->loader->add_action( 'INSERT_WP_HOOK', $plugin_frontend, 'INSERT_CALLBACK' );
  }

  /**
   * Run the loader to execute all of the hooks with WordPress.
   *
   * @since    0.0.1
   */

  public function run() {
    $this->loader->run();
  }

  /**
   * The reference to the class that orchestrates the hooks with the plugin.
   *
   * @since     0.0.1
   * @return    IIP_Events_Loader    Orchestrates the hooks of the plugin.
   */

  public function get_loader() {
    return $this->loader;
  }

  // Retrieve the name & version number of the plugin.
  public function get_plugin_name() {
    return $this->plugin_name;
  }

  public function get_version() {
    return $this->version;
  }
}
