describe('Проверка авторизации', function () {

    it('Проверка на позитивынй кейс авторизации (Верный логин и верный пароль)', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
         
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажали "Войти"

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что после авторизации видим текст
         cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })


     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
        
        cy.get('#forgotEmailButton').click(); // нажали "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru') // ввели е-мейл для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажали "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })


     it('Проверка на негативный кейс авторизации (НЕ правильный ПАРОЛЬ)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
        
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })


    it('Проверка на негативный кейс авторизации (НЕ правильный ЛОГИН)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
        
        cy.get('#mail').type('german@dolnikoff.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })


    it('Проверка на негативный кейс валидации (логин без @)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
        
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали "Войти"

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    
    it('Проверка на приведение к строчным буквам в логине)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем цвет кнопки восстановления пароля
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали "Войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // этот текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })
 })
 
 

 