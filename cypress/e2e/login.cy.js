describe('Проверка авторизации', function () {

    it('1. Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали "Войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим текст после авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

     })

     it('2. Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

    })

     it('3. Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажали "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажали "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Видим текст после отправки кода
        cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

    })

    it('4. НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('erman@dolnikov.ru'); // Ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Видим текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

    })

    it('5. Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

    })

    it('6. Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим текст после успешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст выиден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и он виден пользователю

    })

})