$(document).ready(function() {
  let users = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('username'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: 'users.php?query=%QUERY',
      wildcard: '%QUERY'
    }
  });
  users.initialize();

  $('#users').typeahead(
    {
      hint: true,
      highlight: true,
      minlength: 2
    },
    {
      name: 'users',
      displayKey: 'username',
      source: users.ttAdapter()
    }
  );
});
