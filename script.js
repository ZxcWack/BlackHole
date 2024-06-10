document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      // Сохраняем логин и пароль в localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      alert('Регистрация прошла успешно!');
  
      // Перенаправление на главную страницу (например, home.html)
      window.location.href = 'home.html';
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  });
  