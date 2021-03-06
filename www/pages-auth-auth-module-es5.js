(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/auth/auth.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n\r\n  <div class=\"content-wrapper\">\r\n    <ion-button class=\"mb15\" shape=\"round\" (click)=\"goto(routes.login)\"> {{ 'auth-component.login-button' | translate }}</ion-button>\r\n    <ion-button class=\"mb15\" shape=\"round\" fill=\"outline\" (click)=\"goto(routes.register)\">\r\n      {{ 'auth-component.signup-button' | translate }}</ion-button\r\n    >\r\n<!--  -->\r\n    <p class=\"text-line-through-background\">\r\n      <span>{{ 'auth-component.alt-login' | translate }}</span>\r\n    </p>\r\n    <div class=\"social\">\r\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLogin(provider.google)\">\r\n        {{ 'auth-component.google' | translate }}\r\n      </ion-button>\r\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLogin(provider.facebook)\">\r\n        {{ 'auth-component.facebook' | translate }}\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"forgot mt15\" (click)=\"goto(routes.forgot)\">\r\n      {{ 'auth-component.forgot-text-1' | translate }}\r\n      <a class=\"reset\">{{ 'auth-component.forgot-text-2' | translate }} </a>\r\n    </div>\r\n\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.i-read' | translate\r\n      }}<a (click)=\"openTermsAndConditions()\" class=\"strong\">{{ 'auth-component.tandc' | translate }}</a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/deactivated-account/deactivated-account.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\"\r\n      size=\"small\"\r\n      color=\"medium\"\r\n      (click)=\"goto(routes.login)\">\r\n      <ion-icon mode=\"md\"\r\n        src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'deactivated-account-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\"\r\n        *ngIf=\"currentUser\">\r\n        <div class=\"user-wrapper\">\r\n\r\n          <p class=\"subtitle\">{{'deactivated-account-component.subtitle' | translate}}\r\n            <br>{{currentUser.displayName}}\r\n          </p>\r\n          <div class=\"img\"\r\n            [image-loader]=\"currentUser.photoURL\"></div>\r\n        </div>\r\n        <p class=\"info\"> {{'deactivated-account-component.info' | translate}} </p>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          color=\"secondary\"\r\n          (click)=\"reactivate()\">\r\n          {{'deactivated-account-component.reactivate-button' | translate}}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/forgot/forgot.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <div class=\"content-wrapper center\">\r\n    <div class=\"title\">{{ 'forgot-component.title' | translate }}</div>\r\n\r\n    <!-- start email form -->\r\n    <ng-container *ngIf=\"!isPasswordReset\">\r\n      <form class=\"form\" *ngIf=\"!hasRequested\" #emailForm=\"ngForm\">\r\n        <div class=\"subtitle\">{{ 'forgot-component.subtitle-email' | translate }}</div>\r\n\r\n        <form-field fill=\"true\" color=\"medium\">\r\n          <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\r\n          <ion-input\r\n            inputRef\r\n            email\r\n            placeholder=\"{{ 'forgot-component.email-label' | translate }}\"\r\n            name=\"email\"\r\n            [(ngModel)]=\"model.email\"\r\n            #email=\"ngModel\"\r\n            required\r\n          ></ion-input>\r\n          <div errors *ngIf=\"email.touched && email.invalid\">\r\n            <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n            <span *ngIf=\"email?.errors?.email\">{{ 'form-validation-messages.email' | translate }}</span>\r\n          </div>\r\n        </form-field>\r\n\r\n        <ion-button\r\n          class=\"no-shrink\"\r\n          expand=\"full\"\r\n          shape=\"round\"\r\n          (click)=\"requestReset()\"\r\n          [btnStatus]=\"loading\"\r\n          slot=\"end\"\r\n        >\r\n          {{ 'forgot-component.request-button' | translate }}\r\n          <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n        </ion-button>\r\n      </form>\r\n      <div class=\"info\" *ngIf=\"hasRequested\">{{ 'forgot-component.password-reset-info' | translate }}</div>\r\n    </ng-container>\r\n\r\n    <!-- end email form -->\r\n\r\n    <!-- start password form -->\r\n    <form class=\"form\" *ngIf=\"isPasswordReset\" #passwordForm=\"ngForm\">\r\n      <div class=\"subtitle\">{{ 'forgot-component.subtitle-password' | translate }}</div>\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"password\"\r\n          type=\"password\"\r\n          placeholder=\"{{ 'forgot-component.password-label' | translate }}\"\r\n          [(ngModel)]=\"model.password\"\r\n          #password=\"ngModel\"\r\n          (secure)=\"passwordStrength = $event\"\r\n          required\r\n        ></ion-input>\r\n        <small\r\n          class=\"pass-strength\"\r\n          suffix\r\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\r\n        ></small>\r\n        <div errors *ngIf=\"password.touched && password.invalid\">\r\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"rpassword\"\r\n          type=\"password\"\r\n          placeholder=\"{{ 'forgot-component.retype-password-label' | translate }}\"\r\n          [(ngModel)]=\"model.rpassword\"\r\n          [compare-password]=\"password\"\r\n          #rpassword=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n\r\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\r\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\r\n            'form-validation-messages.password-no-match' | translate\r\n          }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <ion-button\r\n        class=\"no-shrink\"\r\n        expand=\"full\"\r\n        shape=\"round\"\r\n        (click)=\"resetPassword()\"\r\n        [btnStatus]=\"loading\"\r\n        slot=\"end\"\r\n      >\r\n        {{ 'forgot-component.reset-button' | translate }}\r\n        <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n      </ion-button>\r\n    </form>\r\n    <!-- end password form -->\r\n\r\n    <!-- start login option -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.login-text-1' | translate }}\r\n      <a (click)=\"goto(routes.login)\" class=\"strong\">\r\n        {{ 'auth-component.login-text-2' | translate }}\r\n      </a>\r\n    </div>\r\n    <!-- end login option -->\r\n\r\n    <p class=\"text-line-through-background\"><span>or</span></p>\r\n\r\n    <!-- start get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'login-component.dont-have-account' | translate }}\r\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper center\">\r\n    <!-- info section when user has verified their account -->\r\n    <div class=\"info\" *ngIf=\"emailVerified\">\r\n      <ion-icon src=\"assets/icons/info.svg\"></ion-icon><span>{{ 'login-component.email-verified' | translate }}</span>\r\n    </div>\r\n\r\n    <div class=\"title\">{{ 'login-component.title' | translate }}</div>\r\n    <!-- start form -->\r\n    <form class=\"form\" #form=\"ngForm\">\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\r\n        <ion-input inputRef name=\"email\" placeholder=\"Email\" [(ngModel)]=\"model.email\" required email></ion-input>        \r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input type=\"password\" name=\"password\" required inputRef placeholder=\"Password\" [(ngModel)]=\"model.password\"></ion-input>\r\n      </form-field>\r\n    </form>\r\n\r\n    <div class=\"remember-me\">\r\n      <ion-checkbox name=\"rememberMe\" [(ngModel)]=\"rememberMe\"></ion-checkbox>\r\n      <div class=\"remember-me-text\">{{ 'login-component.remember-label' | translate }}</div>\r\n    </div>\r\n    <!-- end form -->\r\n\r\n    <!-- signin button -->\r\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"login()\" [btnStatus]=\"loading\" slot=\"end\">\r\n      {{ 'auth-component.login-button' | translate }}\r\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n    </ion-button>\r\n    <!-- end sign in button -->\r\n\r\n    <!-- start forgot password -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.forgot-text-1' | translate }}\r\n      <a (click)=\"goto(routes.forgot)\" class=\"strong\">\r\n        {{ 'auth-component.forgot-text-2' | translate }}\r\n      </a>\r\n    </div>\r\n    <!-- end forgot password -->\r\n\r\n    <p class=\"text-line-through-background\"><span>or</span></p>\r\n\r\n    <!-- start social buttons -->\r\n    <div class=\"social-buttons\">\r\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLoginIn(provider.google)\">\r\n        {{ 'auth-component.google' | translate }}</ion-button\r\n      >\r\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLoginIn(provider.facebook)\">\r\n        {{ 'auth-component.facebook' | translate }}</ion-button\r\n      >\r\n    </div>\r\n    <!-- end social buttons -->\r\n\r\n    <!-- start get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'login-component.dont-have-account' | translate }}\r\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/register/register.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <div class=\"content-wrapper center\">\r\n    <!-- title -->\r\n    <div class=\"subtitle\">{{ 'signup-component.title' | translate }}</div>\r\n\r\n    <!-- start form -->\r\n    <form class=\"form\" #form=\"ngForm\">\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"displayName\"\r\n          placeholder=\"Display Name\"\r\n          [(ngModel)]=\"model.displayName\"\r\n          #displayName=\"ngModel\"\r\n          required\r\n        >\r\n        </ion-input>\r\n        <div errors *ngIf=\"displayName.touched && displayName.invalid\">\r\n          <span *ngIf=\"displayName?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"email\"\r\n          placeholder=\"Email\"\r\n          [(ngModel)]=\"model.email\"\r\n          #email=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n        <div errors *ngIf=\"email.touched && email.invalid\">\r\n          <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          type=\"password\"\r\n          name=\"password\"\r\n          placeholder=\"Password\"\r\n          [(ngModel)]=\"model.password\"\r\n          #password=\"ngModel\"\r\n          (secure)=\"passwordStrength = $event\"\r\n          required\r\n        ></ion-input>\r\n        <small\r\n          class=\"pass-strength\"\r\n          suffix\r\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\r\n        ></small>\r\n        <div errors *ngIf=\"password.touched && password.invalid\">\r\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"rpassword\"\r\n          type=\"password\"\r\n          placeholder=\"Retype Password\"\r\n          [(ngModel)]=\"model.rpassword\"\r\n          [compare-password]=\"password\"\r\n          #rpassword=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n\r\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\r\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\r\n            'form-validation-messages.password-no-match' | translate\r\n          }}</span>\r\n        </div>\r\n      </form-field>\r\n    </form>\r\n    <!-- end form -->\r\n\r\n    <!-- start sign up button -->\r\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"signup()\" [btnStatus]=\"loading\" slot=\"end\">\r\n      {{ 'auth-component.signup-button' | translate }}\r\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n    </ion-button>\r\n    <!-- end sign up button -->\r\n\r\n    <!-- get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.login-text-1' | translate }}\r\n      <a (click)=\"goto(routes.login)\" class=\"strong\">{{ 'auth-component.login-button' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/verify-email/verify-email.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"back()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'verify-email-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" *ngIf=\"currentUser\">\r\n        <div class=\"user-wrapper\">\r\n          <p class=\"subtitle\" [translate]=\"'verify-email-component.subtitle'\" [translateParams]=\"{ name: currentUser.displayName }\"></p>\r\n        </div>\r\n        <p class=\"info\" [innerHTML]=\"'verify-email-component.info' | translate: { email: currentUser.email }\"></p>\r\n\r\n        <ion-button class=\"resend-btn\" expand=\"block\" shape=\"round\" color=\"secondary\" (click)=\"resendVerificationEmail()\">\r\n          {{ 'verify-email-component.resend-button' | translate }}\r\n        </ion-button>\r\n\r\n        <ion-button expand=\"block\" shape=\"round\" color=\"danger\" (click)=\"back()\">\r\n          {{ 'verify-email-component.login-button' | translate }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/pages/auth/auth.module.ts":
/*!***************************************!*\
  !*** ./src/pages/auth/auth.module.ts ***!
  \***************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/pages/auth/components/auth/auth.component.ts");
/* harmony import */ var _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/deactivated-account/deactivated-account.component */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/pages/auth/components/forgot/forgot.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/pages/auth/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/pages/auth/components/register/register.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/pages/auth/components/verify-email/verify-email.component.ts");
/* harmony import */ var _guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/verify-email/verify-email.guard */ "./src/pages/auth/guards/verify-email/verify-email.guard.ts");












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"], _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
                    },
                    {
                        path: 'login',
                        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                    },
                    {
                        path: 'register',
                        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
                    },
                    {
                        path: 'forgot',
                        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"]
                    },
                    {
                        path: 'deactivated',
                        component: _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]
                    },
                    {
                        canActivate: [_guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailGuard"]],
                        path: 'verify-email',
                        component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"]
                    }
                ])
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  :host .content-wrapper .social {\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: flex; }\n  :host .content-wrapper .social ion-button {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .content-wrapper .forgot,\n  :host .content-wrapper .terms {\n    text-align: center;\n    margin: 15px 0; }\n  :host .content-wrapper .forgot {\n    font-size: 14px; }\n  :host .content-wrapper .terms {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBTjNCO0lBU00sd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQVZuQjtNQWFRLG9CQUFhO01BQWIsYUFBYTtNQUNiLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0VBZGY7O0lBbUJPLGtCQUFrQjtJQUNqQixjQUFjLEVBQUE7RUFwQnRCO0lBd0JNLGVBQWUsRUFBQTtFQXhCckI7SUE0Qk0sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcmdvdCxcclxuICAgIC50ZXJtcyB7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVybXMge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/modals/terms-and-conditions/terms-and-conditions.component */ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");






/**
 * navigate to login or use social login, access to terms and conditions modal
 */
var AuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthComponent, _super);
    function AuthComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /** stores enum of social providers */
        _this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["SocialAuthProvider"];
        /** loader for facebook button in template */
        _this.fbLoading = false;
        /** loader for facebook button in template */
        _this.gplusLoading = false;
        /** common success promise callback */
        _this.successPromise = function () {
            _this.loading = false;
            _this.fbLoading = false;
            _this.gplusLoading = false;
            // this.goto(this.routes.dashboard);
            _this.goto(_this.routes.messages); //kjm
        };
        /** common failed promise callback */
        _this.failPromise = function (err) {
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    AuthComponent.prototype.socialLogin = function (provider) {
        var _this = this;
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch(function (err) { return _this.failPromise(err); });
    };
    /** open terms and conditions modal */
    AuthComponent.prototype.openTermsAndConditions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsComponent"])];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/pages/auth/components/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AuthComponent);
    return AuthComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  background-image: url('Background1.jpg');\n  background-size: cover no-repeat fixed; }\n  :host .content-wrapper .wrapper {\n    display: -webkit-box;\n    display: flex;\n    height: 100%; }\n  :host .content-wrapper .wrapper .content-scroll {\n      height: calc(100% - 90px) !important;\n      width: 100%;\n      padding: 0 20px; }\n  :host .content-wrapper .wrapper .content-scroll .user-wrapper {\n        display: -webkit-box;\n        display: flex;\n        margin: 10px 0 30px; }\n  :host .content-wrapper .wrapper .content-scroll .user-wrapper .img {\n          width: 80px;\n          height: 80px;\n          border-radius: 4px;\n          box-shadow: 1px 2px 2px var(--ion-color-medium); }\n  :host .content-wrapper .wrapper .content-scroll .user-wrapper .subtitle {\n          margin-top: 0;\n          font-size: 18px;\n          -webkit-box-flex: 1;\n                  flex: 1; }\n  :host .content-wrapper .wrapper .content-scroll .info {\n        margin-top: 0;\n        color: var(--ion-color-medium);\n        font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2RlYWN0aXZhdGVkLWFjY291bnQvZGVhY3RpdmF0ZWQtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHdDQUFzRTtFQUN0RSxzQ0FBc0MsRUFBQTtFQUoxQztJQU1NLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVksRUFBQTtFQVBsQjtNQVVRLG9DQUFvQztNQUNwQyxXQUFXO01BQ1gsZUFBZSxFQUFBO0VBWnZCO1FBZVUsb0JBQWE7UUFBYixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUFoQjdCO1VBa0JZLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLCtDQUErQyxFQUFBO0VBckIzRDtVQXdCWSxhQUFhO1VBQ2IsZUFBZTtVQUNmLG1CQUFPO2tCQUFQLE9BQU8sRUFBQTtFQTFCbkI7UUErQlUsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9kZWFjdGl2YXRlZC1hY2NvdW50L2RlYWN0aXZhdGVkLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiBcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXcvQmFja2dyb3VuZDEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIG5vLXJlcGVhdCBmaXhlZDtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgICAudXNlci13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAzMHB4O1xyXG4gICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeactivatedAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivatedAccountComponent", function() { return DeactivatedAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * this page is shown when a user deactivate their account.
 * user account deactivation is just a boolean in user document that can be toggled in settings
 * every time a user logs in the user is redirected to this page using the auth guard
 * if they have deactivated their account
 */
var DeactivatedAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeactivatedAccountComponent, _super);
    function DeactivatedAccountComponent(injector, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        return _this;
    }
    /** get current user */
    DeactivatedAccountComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** reactivate a user account, sign out user and navigate to login page */
    DeactivatedAccountComponent.prototype.reactivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.loading = true;
                        user.deactivated = false;
                        this.firestoreService
                            .update("users/" + user.uid, user)
                            .then(function () {
                            _this.loading = false;
                            _this.authService.signOut();
                            _this.goto(_this.routes.login);
                            _this.toast(_this.translate.instant('deactivated-account-component.reactivated-success-message'));
                        })
                            .catch(function (err) { return _this.toast(err); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DeactivatedAccountComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
    ]; };
    DeactivatedAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deactivated-account',
            template: __webpack_require__(/*! raw-loader!./deactivated-account.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html"),
            styles: [__webpack_require__(/*! ./deactivated-account.component.scss */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], DeactivatedAccountComponent);
    return DeactivatedAccountComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.scss":
/*!****************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n  :host ion-content .content-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: 100%;\n    width: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 0 -40px;\n    padding-top: 50px; }\n  :host ion-content .content-wrapper.center {\n      -webkit-box-pack: center;\n              justify-content: center;\n      align-self: center; }\n  :host ion-content .content-wrapper .title {\n      font-size: 24px;\n      margin-bottom: 10px; }\n  :host ion-content .content-wrapper .subtitle {\n      font-size: 14px;\n      color: var(--ion-color-medium); }\n  :host ion-content .content-wrapper .info {\n      text-align: center;\n      margin: 10px;\n      border-top: 1px solid var(--ion-color-primary-tint);\n      border-bottom: 1px solid var(--ion-color-primary-tint);\n      font-size: 15px;\n      padding: 20px; }\n  :host ion-content .content-wrapper .terms {\n      text-align: center;\n      margin: 10px 0 0;\n      font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQ0FBYSxFQUFBO0VBRmpCO0lBS00sb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixpQkFBaUIsRUFBQTtFQVp2QjtNQWVRLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsa0JBQWtCLEVBQUE7RUFoQjFCO01Bb0JRLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQXJCM0I7TUF3QlEsZUFBZTtNQUNmLDhCQUE4QixFQUFBO0VBekJ0QztNQTRCUSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLG1EQUFtRDtNQUNuRCxzREFBc0Q7TUFDdEQsZUFBZTtNQUNmLGFBQWEsRUFBQTtFQWpDckI7TUFxQ1Esa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHJcbiAgICAgICYuY2VudGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmZvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.ts":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * allows user to update their password
 * send a one time token to users email so that they can reset their password using firebase auth,
 * when user clicks the link in their email, they are redirected to this component with code in query params
 * check query-params and send code as well as new user password to change user password
 */
var ForgotComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForgotComponent, _super);
    function ForgotComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.isPasswordReset = false;
        _this.hasRequested = false;
        _this.model = { code: null, email: null, password: null, rpassword: null };
        _this.failPromise = function (err) {
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** subscribe to query param changes,
     * if the param oobCode, provided by firebase is included set isPassword reset property to true
     * store oobCode value in model property. the email route configurations are done in
     * https://console.firebase.google.com/u/1/project/complete-fire-starter/authentication/emails
     */
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.mode === 'resetPassword' && param.oobCode) {
                _this.model.code = param.oobCode;
                _this.isPasswordReset = true;
            }
        }));
    };
    /** allow firebase to send a password reset token to the users provided email */
    ForgotComponent.prototype.requestReset = function () {
        var _this = this;
        this.loading = true;
        if (this.emailForm.valid) {
            this.authService
                .sendPasswordReset(this.model.email)
                .then(function () {
                _this.loading = false;
                _this.hasRequested = true;
            })
                .catch(function (err) { return _this.failPromise(err); });
        }
    };
    /** allow firebase to handle password change by providing new and retype new password */
    ForgotComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        if (this.passwordForm.valid) {
            this.authService
                .confirmPasswordReset(this.model.code, this.model.password)
                .then(function () {
                _this.loading = false;
                _this.toast(_this.translate.instant('forgot-component.reset-success'));
                _this.goto(_this.routes.login);
            })
                .catch(function (err) { return _this.failPromise(err); });
        }
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailForm', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotComponent.prototype, "emailForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordForm', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotComponent.prototype, "passwordForm", void 0);
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/pages/auth/components/forgot/forgot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ForgotComponent);
    return ForgotComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px; }\n  :host ion-content .content-wrapper.center {\n    -webkit-box-pack: center;\n            justify-content: center;\n    align-self: center; }\n  :host ion-content .content-wrapper .title {\n    font-size: 24px;\n    margin-bottom: 10px; }\n  :host ion-content .content-wrapper .info {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 10px 0;\n    font-size: 13px;\n    font-weight: bold;\n    color: var(--ion-color-primary); }\n  :host ion-content .content-wrapper .info ion-icon {\n      font-size: 45px;\n      margin-right: 10px; }\n  :host ion-content .content-wrapper .social-buttons {\n    display: -webkit-box;\n    display: flex; }\n  :host ion-content .content-wrapper .social-buttons ion-button {\n      width: 100%; }\n  :host ion-content .content-wrapper .terms {\n    text-align: center;\n    margin: 10px 0 0;\n    font-size: 13px; }\n  :host ion-content .content-wrapper .remember-me {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-bottom: 15px;\n    font-size: 13px; }\n  :host ion-content .content-wrapper .remember-me .remember-me-text {\n      margin-left: 10px; }\n  #bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBUU0sb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBO0VBZGxDO0lBa0JRLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7RUFuQjFCO0lBdUJRLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQXhCM0I7SUE0QlEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwrQkFBK0IsRUFBQTtFQWpDdkM7TUFtQ1UsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBcEM1QjtJQXlDUSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQXpDckI7TUE0Q1UsV0FBVyxFQUFBO0VBNUNyQjtJQWlEUSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQW5EdkI7SUF1RFEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0VBMUR2QjtNQTREVSxpQkFBaUIsRUFBQTtFQU8zQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUVQLHlCQUFBO0VBQ0EsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3L0JhY2tncm91bmQxLmpwZycpO1xyXG4gXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29udHJhc3QpO1xyXG4gICAgXHJcbiAgXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xyXG4gICAgIFxyXG5cclxuICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc29jaWFsLWJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVybXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLnJlbWVtYmVyLW1lLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jYmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgdG9wOiAwOyBcclxuICBsZWZ0OiAwOyBcclxuXHRcclxuICAvKiBQcmVzZXJ2ZSBhc3BldCByYXRpbyAqL1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/pages/auth/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");







/**
 * handle user authentication via email and also social login
 * access forgot password and register pages
 */
var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(injector, authService, storage) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.storage = storage;
        _this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["SocialAuthProvider"];
        _this.fbLoading = false;
        _this.gplusLoading = false;
        _this.model = {
            email: '',
            password: ''
        };
        _this.rememberMe = false;
        _this.successPromise = function () {
            _this.loading = false;
            _this.fbLoading = false;
            _this.gplusLoading = false;
            // this.goto(this.routes.dashboard);
            _this.goto(_this.routes.messages); //kjm
        };
        _this.failPromise = function (err) {
            _this.fbLoading = false;
            _this.gplusLoading = false;
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** get username from storage if available,
     * set remember me property is user name available,
     * set email property with username
     */
    LoginComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('username')];
                    case 1:
                        username = _a.sent();
                        this.rememberMe = username ? true : false;
                        this.model.email = username ? username : this.model.email;
                        this.activatedRoute.queryParams.subscribe(function (param) {
                            if (param && param.emailVerified) {
                                _this.emailVerified = param.emailVerified;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** if remember me checkbox ticked, save username. if unticked, remove username */
    LoginComponent.prototype.doRememberMe = function () {
        if (this.rememberMe && this.model.email) {
            this.storage.set('username', this.model.email);
            return;
        }
        this.storage.remove('username');
    };
    /** login user, handle remember me and route to dashboard when complete */
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.model.email) {
            return;
        }
        if (this.form.valid) {
            this.loading = true;
            this.doRememberMe();
            this.authService
                .signIn(this.model)
                .then(this.successPromise)
                .catch(function (err) { return _this.failPromise(err); });
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    };
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    LoginComponent.prototype.socialLoginIn = function (provider) {
        var _this = this;
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch(function (err) { return _this.failPromise(err); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], LoginComponent);
    return LoginComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n  :host ion-content .content-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: 100%;\n    width: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 0 -40px;\n    -webkit-box-flex: 1;\n            flex: 1;\n    flex-shrink: 0; }\n  :host ion-content .content-wrapper.center {\n      -webkit-box-pack: center;\n              justify-content: center;\n      align-self: center; }\n  :host ion-content .content-wrapper .title {\n      font-size: 24px;\n      margin-bottom: 10px; }\n  :host ion-content .content-wrapper .subtitle {\n      margin: 20px 0;\n      text-align: center;\n      color: var(--ion-color-medium-shade); }\n  :host ion-content .content-wrapper .social-buttons {\n      display: -webkit-box;\n      display: flex; }\n  :host ion-content .content-wrapper .social-buttons ion-button {\n        width: 100%; }\n  :host ion-content .content-wrapper .terms {\n      text-align: center;\n      margin: 10px 0 0;\n      font-size: 13px; }\n  :host ion-content .content-wrapper .remember-me {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      margin-bottom: 15px;\n      font-size: 13px; }\n  :host ion-content .content-wrapper .remember-me .remember-me-text {\n        margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0NBQWEsRUFBQTtFQUZqQjtJQUtNLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsbUJBQU87WUFBUCxPQUFPO0lBQ1AsY0FBYyxFQUFBO0VBYnBCO01BZVEsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixrQkFBa0IsRUFBQTtFQWhCMUI7TUFvQlEsZUFBZTtNQUNmLG1CQUFtQixFQUFBO0VBckIzQjtNQXlCUSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG9DQUFvQyxFQUFBO0VBM0I1QztNQStCUSxvQkFBYTtNQUFiLGFBQWEsRUFBQTtFQS9CckI7UUFrQ1UsV0FBVyxFQUFBO0VBbENyQjtNQXVDUSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQXpDdkI7TUE2Q1Esb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBaER2QjtRQWtEVSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc29jaWFsLWJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVybXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLnJlbWVtYmVyLW1lLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * get user details from user and sign them up to firebase.
 * once signed up, send verification email to the users email.
 */
var RegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterComponent, _super);
    function RegisterComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.model = {
            displayName: null,
            email: '',
            password: '',
            rpassword: null
        };
        /** send verification email to the users email and navigate to verify page */
        _this.successPromise = function () {
            _this.loading = false;
            _this.authService.sendEmailVerification();
            _this.goto(_this.routes.verifyEmail);
        };
        _this.failPromise = function (err) {
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** collect user basic info and sign up user to app using firebase auth */
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            this.authService
                .signUp(this.model)
                .then(this.successPromise)
                .catch(function (err) { return _this.failPromise(err); });
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/auth/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%; }\n  :host .content-wrapper .wrapper .content-scroll {\n    height: calc(100% - 90px) !important;\n    width: 100%;\n    padding: 0 20px; }\n  :host .content-wrapper .wrapper .content-scroll .subtitle {\n      margin: 10px 0 0;\n      font-size: 18px;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .content-wrapper .wrapper .content-scroll .info {\n      margin: 0 5px 30px;\n      color: var(--ion-color-medium-shade);\n      font-size: 14px; }\n  :host .content-wrapper .wrapper .content-scroll .info a {\n        color: var(--ion-color-primary); }\n  :host .content-wrapper .wrapper .content-scroll .resend-btn {\n      margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFKbEI7SUFPUSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGVBQWUsRUFBQTtFQVR2QjtNQVlVLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsbUJBQU87Y0FBUCxPQUFPLEVBQUE7RUFkakI7TUFrQlUsa0JBQWtCO01BQ2xCLG9DQUFvQztNQUNwQyxlQUFlLEVBQUE7RUFwQnpCO1FBc0JZLCtCQUErQixFQUFBO0VBdEIzQztNQTBCVSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDVweCAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXNlbmQtYnRuIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");




/**
 * users are redirected to verify page if they do not have their emails verified
 * here they can resend a verification code or go back to login page
 */
var VerifyEmailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerifyEmailComponent, _super);
    function VerifyEmailComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        return _this;
    }
    /** get current user on component init */
    VerifyEmailComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** send verification email to users email address */
    VerifyEmailComponent.prototype.resendVerificationEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.sendEmailVerification()];
                    case 1:
                        _a.sent();
                        this.toast(this.translate.instant('verify-email-component.verification-email-sent'));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** go back to login page and sign out the user from the app */
    VerifyEmailComponent.prototype.back = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.goto(_this.routes.login);
        });
    };
    VerifyEmailComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/pages/auth/components/verify-email/verify-email.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/auth/guards/verify-email/verify-email.guard.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/guards/verify-email/verify-email.guard.ts ***!
  \******************************************************************/
/*! exports provided: VerifyEmailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailGuard", function() { return VerifyEmailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * check if user is verified, if they are verified, got to dashboard
 * else stay on verified page
 */
var VerifyEmailGuard = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerifyEmailGuard, _super);
    function VerifyEmailGuard(injector, auth) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.auth = auth;
        return _this;
    }
    VerifyEmailGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!!user && _this.auth.emailVerified) {
                _this.goto(_this.routes.dashboard);
            }
            return true;
        }));
    };
    VerifyEmailGuard.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    VerifyEmailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], VerifyEmailGuard);
    return VerifyEmailGuard;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es5.js.map