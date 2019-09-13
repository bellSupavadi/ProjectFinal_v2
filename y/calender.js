// jQuery(document).ready(function(){
// 	jQuery('.datetimepicker').datepicker({
// 		timepicker: true,
// 		language: 'en',
// 		languages: ['en'],
// 		range: true,
// 		multipleDates: true,
// 			multipleDatesSeparator: " - "
			
			
// 	  });
// 	jQuery("#add-event").submit(function(){
// 		alert("Submitted");
// 		var values = {};
// 		$.each($('#add-event').serializeArray(), function(i, field) {
// 			values[field.name] = field.value;
// 		});
// 		console.log(
// 		  values
// 		);
// 	});
//   });
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
/////////////////////////////////////////////////  
var book=[]

  function tong(){
    db.collection("book").where("shopid", "==", shopid).get()
    .then(function (querySnapshot) {
        // doc.data() is never undefined for query doc snapshots
        querySnapshot.docs.forEach(function (data) {
            var start = new Date(data.data().startdate);
            var end = new Date(data.data().enddate);
            var object= {
                title: data.data().brand,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                start: start,
                end: end,
                className: 'fc-bg-default',
                icon : "cog",
                color:getRandomColor()
            }
           book.push(object)
console.log(book);

        });
        test()

    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });
    //    book=[
    //             {
    //                 title: 'Barber',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
    //                 start: '2019-07-07',
    //                 end: '2019-07-07',
    //                 className: 'fc-bg-default',
    //                 icon : "circle"
    //             },
    //             {
    //                 title: 'Flight Paris',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
    //                 start: '2019-08-08T14:00:00',
    //                 end: '2019-08-08T20:00:00',
    //                 className: 'fc-bg-deepskyblue',
    //                 icon : "cog",
    //                 allDay: false
    //             },
               
    //         ]
         
          
        }
function test() {
    


(function () {    
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
    jQuery(function() {
        // page is ready
        jQuery('#calendar').fullCalendar({
            themeSystem: 'bootstrap4',
            // emphasizes business hours
            businessHours: false,
            defaultView: 'month',
            // event dragging & resizing
            editable: true,
            // header
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'today prev,next'
            },
            events:book,
            eventRender: function(event, element) {
                if(event.icon){
                    element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
                }
              },
            dayClick: function() {
                jQuery('#modal-view-event-add').modal();
            },
            eventClick: function(event, jsEvent, view) {
                    jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
                    jQuery('.event-title').html(event.title);
                    jQuery('.event-body').html(event.description);
                    jQuery('.eventUrl').attr('href',event.url);
                    jQuery('#modal-view-event').modal();
            },
        })
    });
  
})(jQuery);
}