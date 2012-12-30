<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Endersquare extends CI_Controller {



	function __construct() {
        parent::__construct();
   	}

	public function index() {
		$this->home();
		
	}

	public function home()	{
		$images['images'] = $this->images();
		$data['titulo'] = "Welcome to Endersquare";
		
		$this->load->view("es_header", $data);
		$this->load->view("es_menu");
		$this->load->view("es_content_test", $images);
		$this->load->view("es_footer_1");
		$this->load->view("es_footer_2");

	}

	public function products() {
		$images['images'] = $this->images();
		$data['titulo'] = "ES - Products";
		
		$this->load->view("es_header", $data);
		$this->load->view("es_menu");
		$this->load->view("es_products",$images);
		$this->load->view("es_footer_1");
		$this->load->view("es_footer_2");
	}

	public function about(){
		$data['titulo'] = "ES - About";

		$this->load->view("es_header",$data);
		$this->load->view("es_menu");
		$this->load->view("es_about");
		$this->load->view("es_footer_1");
		$this->load->view("es_footer_2");
		
	}

	public function contact(){
		$data['titulo'] = "ES - Contact";

		$this->load->view("es_header",$data);
		$this->load->view("es_menu");
		$this->load->view("es_contact");
		$this->load->view("es_footer_1");
		$this->load->view("es_footer_2");
	}

	function images() {
		$this->load->helper('path');
		$this->load->helper('directory');

		$dir = opendir(BASEPATH.'../img/gallery');
		$good_ext = array(".jpg",".png");
		$img = '';

		while (($file = readdir($dir)) !== false) {
			if((substr($file,-4) == $good_ext[0]) || (substr($file,-4) == $good_ext[1])){
				$url_file = '"img/gallery/' . $file . '"';
				$img .= '<a href='.$url_file.' class="fancybox" rel="group"><img src='.$url_file.' alt=´'.$url_file.' /></a>';
			}		
		}
		return $img;
	}

	private function global_vars() {
		$data['titulo'] = "Welcome to Endersquare";
		return $data;
	}

	function __destruct() {
       
   }
}

