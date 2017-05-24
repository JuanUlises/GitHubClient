 //enter ajx
//XMLHTTPRequest
//fect()
/* var promesa = fetch('http://api.github.com/users/UlisesMartinez');
		promesa.then(x=> console.long(x));
				.catch(x=>console.error(x));
*/
/*
$.get();
$.post();
$.load();
*/
/*
$.ajax(){
	type:'GET'
});
*/

			$('form').submit(function(event){
				event.preventDefault();

				var login = $('input').val();
				var promesa = $.get('http://api.github.com/users/'+login);
				promesa
					.done(showUserInfo)
					.done(showUserFollowers)
					.fail(showError);
			})

			function showUserInfo(user){
				$('#username').text(user.name);
				$('#location').text(user.location);
				$('#avatar').attr('src',user.avatar_url);
				$('#followers').text(user.followers);
				$('#following').text('Following: '+user.following);


			}
			function showError(error){
				$('#error').show(5000)
							.alideUp(5000,function(){
								$('#errror').hide(5000)
							});
			}

			function getFollowers(login){
				$.get('https://api.github.com/users/'+login+'followers')
				.done(showUserFollowers)
				.fail(showError)
			}
			function showUserFollowers(followers){
				var template = $('#template')
				for (var i = 0; i < followers.length; i++) {
					var f = followers[i];
					var followerTpl = $(template)
					followerTpl.find('h3').text(f.login);
					followerTpl.find('img').attr('src',user.avatar_url)
					/*demas atributos*/
					$('followers-list').append(followerTpl);
				}
			}