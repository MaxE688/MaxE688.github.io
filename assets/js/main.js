/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$document = $(document),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

		projects.forEach(function(proj, index) {
	
			// Create card, append to DOM
			let $card = $("<div class='col-4 col-6-medium col-12-small card'></div>");
			let $cardArticle = $("<article class='box style2'></article>");
			$card.append($cardArticle);
			$cardArticle.append($("<div class='image featured'><img src='"+ proj.img +"' alt='" + proj.alt + "' /></div>"));
			$cardArticle.append($("<h3>" + proj.title + "</h3>"));
			$cardArticle.append($("<p>" + proj.shortDesc + "</p>"));
			$("#card-container").append($card);
	
			// Create modal elements
			let $modal = $("<div class='modal'></div>");
			let $modalContent = $("<div class='modal-conent'></div>");
			let $closeModal = $("<div class='close-modal'></div>");
			let $content = $("<div class='container flex' ></div>");
	
			// create main content element for modal
			$content.append($("<h1 class='modal-title'> "+ proj.title +"</>"));
			$content.append($("<hr class='modal-title-rule'/>"))
			$content.append($("<img src='"+ proj.img +"'/>"));
			$content.append($("<p>"+ proj.longDesc +"</p>"));
	
			// create close button for modal
			$closeModal.append($("<img class='close-modal-img' id='close-modal-1' src='./images/SVG/close-circle-dark.svg' />"));
			$closeModal.append($("<img class='close-modal-img' id='close-modal-2' src='./images/SVG/close-circle-light.svg' />"));
			
			// append elements to finish creation of modal
			$modalContent.append($closeModal);
			$modalContent.append($content);
			$modal.append($modalContent);
			
			// $card.append($modal);
			$("#modal-container").append($modal);
		});

		// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		
		$document.ready(function(){

			$(".modal").each(function(index){
				var id = "modal-" + index;
				var closeID = "#" + id;
				$(this).attr("id", id);
 
				$(this).find(".close-modal").click(function(){
					console.log("close me:",id);
					$(closeID).removeClass("in");
				});
			});

			$(".box").each(function(index){
				var id = "box-" + index;
				$(this).attr("id", id);

				$(this).on("click",function(){
					console.log("open me");
					$("#modal-"+index).addClass("in");
				});

			});



			// Closes the project preview
			// $(".close-modal").click(function(){
			// 	console.log("Closed");
			// 	$(".modal").toggleClass("in");
			// });
			
			// Opens the project preview
			// $(".box").click(function(){
			// 	console.log("Opened");
			// 	$(".modal").toggleClass("in");
			// });


		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);