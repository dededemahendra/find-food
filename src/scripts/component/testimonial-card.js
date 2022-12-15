class TestimonialCard extends HTMLElement {
  set testimonial(testimonial) {
    this.render(testimonial);
  }

  render(testimonial) {
    this.innerHTML = `
			<p>${testimonial.text}</p>

			<section class='testimonials__card-user'>
				<picture>
					<source type='image/webp' srcset='${testimonial.picture}' loading='lazy' />
					<img src='${testimonial.picture}' alt='${testimonial.name}' loading='lazy' />
				</picture>
				<section>
					<p>${testimonial.name}</p>
					<p><i class='fa-solid fa-star'></i> ${testimonial.rating}</p>
				</section>
			</section>
		`;
  }
}

customElements.define('testimonial-card', TestimonialCard);
