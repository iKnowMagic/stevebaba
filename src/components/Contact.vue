<template>
  <section id="contact" class="probootstrap-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 probootstrap-relative"><h2 class="probootstrap-heading mt0 mb50">Contact Me</h2></div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form action="#" method="post" class="probootstrap-form">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="fname">First Name</label>
                  <input type="text" class="form-control" id="fname" name="fname" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="lname">Last Name</label>
                  <input type="text" class="form-control" id="lname" name="lname" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label> <input type="email" class="form-control" id="email" name="email" />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" class="form-control" id="subject" name="subject" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea cols="30" rows="10" class="form-control" id="message" name="message"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" id="submit" name="submit" value="Send Message" />
            </div>
          </form>
        </div>
        <div class="col-md-5 col-md-push-1">
          <h3 class="mt0">Get In Touch</h3>
          <ul class="probootstrap-contact-info">
            <li><i class="icon-location2"></i> <span>198 West 21th Street, Suite 721 New York NY 10016</span></li>
            <li><i class="icon-mail"></i><span>info@domain.com</span></li>
            <li><i class="icon-phone2"></i><span>+123 456 7890</span></li>
          </ul>

          <h3>Feedback</h3>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
