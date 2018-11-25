// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

// handle back button
function onBackKeyDown() {
   var leftp = app.panel.left && app.panel.left.opened;
               var rightp = app.panel.right && app.panel.right.opened;
               if ( leftp || rightp ) {
                   app.panel.close();
                   return false;
               } else if ($$('.modal-in').length > 0) {
                   app.dialog.close();
                   return false;
               }
               else if (app.views.main.router.url == '/') {
                   app.dialog.confirm('Are you sure you want to exit?', 'Exit', function() {
                       navigator.app.exitApp();
                   },
                   function() {
                   });
               } else {
                   homeView.router.back();
               }
}
document.addEventListener('backbutton', onBackKeyDown, false);

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


$$(document).on('page:init', '.page[data-name="login"]', function (e) {
$('#form-login').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'http://7setiawan.com/syarif/',
            data: $('#form-login').serialize(),
            success: function (result) {
             var res = JSON.stringify(result); 
             alert(res);
            }
          });

        });

  
})