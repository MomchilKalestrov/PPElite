function showProj(uri) {
  $('#modal').toggleClass('d-block');

  switch(uri[uri.length - 1]) {
    case 'f':
      $('#modal-body').append(
      '<object id="modal-data"\
      type="application/pdf"\
      style="aspect-ratio: 16/11; width:100%;"\
      data="./asset/projects/'+uri+'"\
      ></object>');
      break;
    case 'g':
      $('#modal-body').append(
      '<img id="modal-data"\
      style="width:100%;"\
      src="./asset/projects/'+uri+'"\
      ></img>');
      break;
    case '4':
      $('#modal-body').append(
      '<video controls id="modal-data"\
      style="width:100%";>\
      <source src="./asset/projects/'+uri+'" type="video/mp4" />\
      </video>');
      break;
    default:
      $('#modal-body').append('<p id="modal-data">Моля изчакайте.</p>');
      window.location.href = './assets/projects/'+uri;
      break;
  }
}

function loadProj(data) {
  for(let i = 0; i < data.length; ++i)
    for(let j = 0; j < data[i].length; ++j) {
      $card = $("<div>", { class : "card m-1" });

      $body = $("<div>", { class : "card-body d-flex flex-column justify-content-center" });
      $body.appendTo($card);

      $icon = $("<img>", {
        src: "./asset/projects/thumb/" + data[i][j].project.substring(0, data[i][j].project.length - 3) + "jpg",
        class: "card-img-top"
      });
      $($card).prepend($icon);

      $header = $("<h5 class='card-title'>" + data[i][j].title + "</h5>");
      $header.appendTo($body);

      if(data[i][j].authors != undefined) {
        $auth = $("<p class='card-text'>Изготвили:<br>" + data[i][j].authors + "</p>");
        $auth.appendTo($body);
      }

      $button = $('<a class="btn btn-primary">Зареди</a>');
      $button.on("click", function() { showProj(data[i][j].project) });
      $button.appendTo($card);
      
      $("#nav-" + (i + 1)).append($card);
  }
}

function hideModal() {
  $('#modal').removeClass('d-block');
  $('#modal-data').remove();
}

$(function() {
  hideModal();
  $.getJSON("./asset/js/list.json", function(data) {
    loadProj(data);
  });
});