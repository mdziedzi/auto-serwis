window.addEventListener("hashchange", function() { scrollBy(0, -55) })

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
				event.preventDefault();
				$(this).ekkoLightbox();
			});