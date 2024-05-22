describe('Покупка аватара', function () {                               
    it('e2e тест на покупку нового аватара для своего тренера', function () {   
         cy.visit('https://pokemonbattle.me/');                          // зашли на сайт
         cy.get('input[type="email"]').type('USER_LOGIN');               // вводим верный логин
         cy.get('input[type="password"]').type('USER_PASSWORD');         // вводим верный пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку "Подтвердить"
         cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку "Магазин"
         cy.get('.available > button').first().click();                  // кликаем по кнопке "Купить" у первого доступного аватара
         cy.get('.credit').type('4276770012551716');                     // вводим валидный номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим верный CVV карты
         cy.get('.k_input_date').type('1224');                           // вводим верный срок действия карты
         cy.get('.k_input_name').type('Anna Bobina');                    // вводим верное имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку "Оплатить"
         cy.get('#cardnumber').type('56456');                            // вводим верный код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку "Отправить"
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });