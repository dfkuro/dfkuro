<div id="content_1" class="content">
	<div class="contact">
		<h1 style="float: left;">Contact</h1><img style="float: right;" src="<?=base_url('img/logos/letters_icon.png')?>">
		<div class="clear"></div>

		<?php 

			$attributes = array('class' => 'contact', 'id' => 'myform');

			$name = array(
	              'name'        => 'name',
	              'id'          => 'name',
	              'value'       => '',
	              'maxlength'   => '60',
	              'size'        => '40',
	              'placeholder' => 'Write your name.'
	            );

			$email = array(
	              'name'        => 'email',
	              'id'          => 'email',
	              'value'       => '',
	              'class'       => 'validate[required,custom[email]]',
	              'maxlength'   => '60',
	              'size'        => '40',
	              'placeholder' => 'Write your E-mail.'
	            );

			$phone = array(
	              'name'        => 'phone',
	              'id'          => 'phone',
	              'value'       => '',
	              'maxlength'   => '15',
	              'size'        => '40',
	              'placeholder' => 'Write your phone number.'
	            );

			$message = array(
	              'name'        => 'message',
	              'id'          => 'message',
	              'value'       => '',
	              'maxlength'   => '300',
	              'size'        => '40',
	              'placeholder' => 'Please, leave your message here.'
	            );
		?>
		<div id="contact_form">
			<?php
				echo form_open('/contact', $attributes);
				echo "<label>Name: </label>";
				echo '<div class="clear"></div>';
				echo form_input($name);
				echo '<div class="clear"></div>';
				echo "<label>Email: </label>";
				echo '<div class="clear"></div>';
				echo form_input($email);
				echo '<div class="clear"></div>';
				echo "<label>Phone: </label>";
				echo '<div class="clear"></div>';
				echo form_input($phone);
				echo '<div class="clear"></div>';
				echo "<label>Message: </label>";
				echo '<div class="clear"></div>';
				echo form_textarea($message);
				echo '<div class="clear"></div>';
				echo form_submit('mysubmit', 'Submit Post!');
				echo form_close();
				echo '<div class="clear"></div>';
			?>
		</div>
		<br />

		<h1 style="">Find Us</h1><br />
		<div style="width:450px; height:350px; margin:0 auto;">
			<iframe  width="450px" height="350px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=Tokio,+Jap%C3%B3n&amp;aq=0&amp;oq=tokyo&amp;sll=35.671958,139.691162&amp;sspn=0.004401,0.009645&amp;ie=UTF8&amp;hq=&amp;hnear=Tokio,+Jap%C3%B3n&amp;l0=35.689488,139.691706&amp;spn=0.0044,0.009645&amp;t=m&amp;z=16&amp;iwloc=A&amp;output=embed"></iframe><br /><br />
		</div>
	</div>
</div>
