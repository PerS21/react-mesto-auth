(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),i=n.n(s),r=(n(26),n(21)),o=n(2),l=n(3),u=(n(27),n.p+"static/media/VectorLogo.bbe2a6ea.svg"),d=n(0);var h=function(e){var t=Object(l.g)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:u,alt:"\u043c\u0435\u0441\u0442\u043e",className:"header__img",onClick:function(){t.push("/")}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)("a",{href:"sign-in",className:"header__Link header__text",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)("a",{href:"sign-up",className:"header__Link header__text",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(l.b,{path:"/",children:Object(d.jsxs)("div",{className:"header__auth-section",children:[Object(d.jsx)("p",{className:"header__text",children:localStorage.getItem("email")}),Object(d.jsx)("button",{className:"header__text header__button",onClick:function(){localStorage.removeItem("jwt"),e.setisLoggedIn(!1),t.push("/sign-in")},children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})]})},j=n.p+"static/media/Pencil.6c7bf054.svg",m=n.p+"static/media/Plus.bed8c136.svg",b=c.a.createContext();var p=function(e){var t=c.a.useContext(b),n=e.card.owner._id===t._id,a="element__trash card__delete-button button ".concat(n?"element__trash_visible":"element__trash_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),i="element__heart ".concat(s?"element__heart_active":"element__heart_notActive");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__img",onClick:function(){e.onCardClick(e.card)}}),Object(d.jsxs)("div",{className:"element__info",children:[Object(d.jsx)("h2",{className:"element__text",children:e.card.name}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",className:i,onClick:function(){e.handleCardLike(e.card)}}),Object(d.jsx)("p",{className:"element__heart-quantity",children:e.card.likes.length})]})]}),Object(d.jsx)("button",{type:"button",className:a,onClick:function(){e.handleCardDelete(e.card)}})]})},f=c.a.createContext();var _=function(e){var t=c.a.useContext(b);return c.a.useContext(f)&&Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__profile-info",children:[Object(d.jsxs)("button",{className:"profile__avatar",onClick:e.onEditAvatar,children:[Object(d.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-img"}),Object(d.jsx)("div",{className:"profile__avatar-edit",children:Object(d.jsx)("img",{className:"profile__avatar-edit-icon",src:j,alt:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})]}),Object(d.jsxs)("div",{className:"profile__text",children:[Object(d.jsxs)("div",{className:"profile__name-line",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button button",onClick:e.onEditProfile,children:Object(d.jsx)("img",{src:j,alt:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})]}),Object(d.jsx)("p",{className:"profile__prof",children:t.about})]})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button button",onClick:e.onAddPlace,children:Object(d.jsx)("img",{src:m,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(d.jsx)("section",{className:"elements",children:Object(d.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(d.jsx)(p,{card:t,setCards:e.setCards,onCardClick:e.onCardClick,handleCardDelete:e.handleCardDelete,handleCardLike:e.handleCardLike},t._id)}))})})]})};var O=function(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{children:["\xa9 ",e," Mesto Russia"]})})};var g=function(e){return null!==e.card&&Object(d.jsx)("div",{className:"popup imgPopup",children:Object(d.jsxs)("div",{className:"popup__container popup__container_content-img",children:[Object(d.jsx)("img",{className:"imgPopup__img",src:e.card.link,alt:e.card.name}),Object(d.jsx)("p",{className:"imgPopup__text",children:e.card.name}),Object(d.jsx)("button",{type:"button",className:"popup__close-button button imgPopup__close-button",onClick:e.onClose})]})})};var x=function(e){return e.isOpen&&Object(d.jsx)("div",{className:"popup ".concat(e.name,"-popup"),children:Object(d.jsx)("div",{className:"popup__container popup__container_content-form",children:Object(d.jsxs)("form",{name:"".concat(e.name,"-form"),className:"form ".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"form__button-save ".concat(e.name,"-form__button-save"),children:e.submitButtonText}),Object(d.jsx)("button",{type:"button",className:"popup__close-button button ".concat(e.name,"-form__close-button"),onClick:e.onClose})]})})})};var v=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),u=l[0],h=l[1],j=c.a.useContext(b);return c.a.useEffect((function(){i(j.name),h(j.about)}),[j,e.isOpen]),Object(d.jsx)(x,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-edit",isOpen:e.isOpen,onClose:e.onClose,submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser(s,u)},children:Object(d.jsxs)("div",{className:"form__inputs",children:[Object(d.jsx)("input",{value:s||"",id:"name",required:!0,minLength:"2",maxLength:"40",name:"fild_name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"form__input profile-edit-form__input-fild-name",onChange:function(e){i(e.target.value)}}),Object(d.jsx)("span",{id:"name-error",className:"form__input-error"}),Object(d.jsx)("input",{value:u||"",id:"about",required:!0,minLength:"2",maxLength:"200",name:"fild_about",type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u044f",className:"form__input profile-edit-form__input-fild-about",onChange:function(e){h(e.target.value)}}),Object(d.jsx)("span",{id:"about-error",className:"form__input-error"})]})})};var C=function(e){var t=c.a.useRef();return Object(d.jsx)(x,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"profile-img-edit",isOpen:e.isOpen,onClose:e.onClose,submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:Object(d.jsxs)("div",{className:"form__inputs",children:[Object(d.jsx)("input",{ref:t,id:"avatar",required:!0,name:"fild_img",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"form__input profile-img-edit-popup__input-fild-link"}),Object(d.jsx)("span",{id:"avatar-error",className:"form__input-error"})]})})};var N=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(d.jsx)(x,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",isOpen:e.isOpen,onClose:e.onClose,submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddCard(c,l)},children:Object(d.jsxs)("div",{className:"form__inputs",children:[Object(d.jsx)("input",{value:c,id:"place",required:!0,minLength:"2",maxLength:"30",name:"fild_place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"form__input add-place-form__input-fild-text",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{id:"place-error",className:"form__input-error"}),Object(d.jsx)("input",{value:l,id:"img",required:!0,name:"fild_img",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"form__input add-place-form__input-fild-link",onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{id:"img-error",className:"form__input-error"})]})})};var k=function(e){return c.a.useContext(f)?Object(d.jsx)(l.b,{path:e.path,children:e.commponent}):Object(d.jsx)(l.a,{to:"/sign-in"})};var A=function(e){var t=e.formName;return Object(d.jsxs)("form",{name:"".concat(t,"-form"),className:"singForm ".concat(t,"-form"),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"singForm__button-save  ".concat(t,"-form__button-save"),children:e.submitButtonText})]})};var S=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(d.jsx)("div",{className:"sing\u0421onteiner",children:Object(d.jsx)(A,{title:"\u0412\u0445\u043e\u0434",onSubmit:function(t){t.preventDefault(),e.onLogin(c,l)},submitButtonText:"\u0412\u043e\u0439\u0442\u0438",formName:"login",children:Object(d.jsxs)("div",{className:"form__inputs",children:[Object(d.jsx)("input",{value:c||"",id:"name",required:!0,minLength:"2",maxLength:"40",name:"fild_name",type:"text",placeholder:"Email",className:"singForm__input profile-edit-form__input-fild-name",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{id:"name-error",className:"form__input-error"}),Object(d.jsx)("input",{value:l||"",id:"about",required:!0,minLength:"2",maxLength:"200",name:"fild_about",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"singForm__input profile-edit-form__input-fild-about",onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{id:"about-error",className:"form__input-error"})]})})})};var L=function(e){return e.isOpen&&Object(d.jsx)("div",{className:"popup infoTooltipPopup",children:Object(d.jsxs)("div",{className:"popup__container popup__container_content-infoTooltip",children:[Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"dd"}),Object(d.jsx)("p",{className:"infoTooltipPopup__text",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Object(d.jsx)("button",{type:"button",className:"popup__close-button button ".concat(e.name,"-form__close-button"),onClick:e.onClose})]})})};var y=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(d.jsxs)("div",{className:"sing\u0421onteiner",children:[Object(d.jsx)(A,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(t){t.preventDefault(),e.onRegisration(c,l)},submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",formName:"register",children:Object(d.jsxs)("div",{className:"form__inputs",children:[Object(d.jsx)("input",{value:c||"",id:"mail",required:!0,minLength:"2",maxLength:"40",name:"fild_name",type:"email",placeholder:"Email",className:"singForm__input profile-edit-form__input-fild-name",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{id:"mail-error",className:"form__input-error"}),Object(d.jsx)("input",{value:l||"",id:"password",required:!0,minLength:"2",maxLength:"200",name:"fild_about",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"singForm__input profile-edit-form__input-fild-about",onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{id:"password-error",className:"form__input-error"})]})}),Object(d.jsxs)("p",{className:"onSingIn__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)("a",{href:"sign-in",className:"onSingIn__link",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(d.jsx)(L,{isOpen:e.isOpen,onClose:e.onClose})]})},U=n(13),B=n(14),I=new(function(){function e(t,n){Object(U.a)(this,e),this._baseUrl=t,this._token=n,this._headers={authorization:this._token,"Content-Type":"application/json"}}return Object(B.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"patchUserImg",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.putLike(e):this.deleteLike(e)}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-25","da22e24c-dd01-4958-b7cb-8f4974dde69d"),T=new(function(){function e(t,n){Object(U.a)(this,e),this._baseUrl=t,this._token=n,this._headers={"Content-Type":"application/json"}}return Object(B.a)(e,[{key:"signUp",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({password:t,email:e})}).then((function(e){if(e.ok)return e.json()}))}},{key:"signIn",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({password:t,email:e})}).then((function(e){if(e.ok)return e.json()}))}},{key:"check",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"Get",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))}}]),e}())("https://auth.nomoreparties.co","da22e24c-dd01-4958-b7cb-8f4974dde69d");var w=function(){var e=Object(l.g)(),t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!0),u=Object(o.a)(i,2),j=u[0],m=u[1],p=Object(a.useState)({name:"",about:"",avatar:"",_id:"",cohort:""}),A=Object(o.a)(p,2),L=A[0],U=A[1];Object(a.useEffect)((function(){I.getUser().then((function(e){return U(e)})).catch((function(e){return console.log(e)}))}),[]);var B=Object(a.useState)(null),w=Object(o.a)(B,2),W=w[0],X=w[1],E=Object(a.useState)(!1),P=Object(o.a)(E,2),V=P[0],H=P[1],J=Object(a.useState)(!1),Q=Object(o.a)(J,2),R=Q[0],F=Q[1],K=Object(a.useState)(!1),Y=Object(o.a)(K,2),M=Y[0],D=Y[1],q=Object(a.useState)(!1),z=Object(o.a)(q,2),G=z[0],Z=z[1];function $(){D(!1),H(!1),F(!1),Z(!1),X(null)}var ee=Object(a.useState)([]),te=Object(o.a)(ee,2),ne=te[0],ae=te[1];return Object(a.useEffect)((function(){I.getCards().then((function(e){return ae(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");T.check(t).then((function(){s(!0)})).catch((function(e){return console.log(e)})).finally((function(){m(!1)})),e.push("/")}else m(!1)}),[]),j?Object(d.jsx)("div",{children:"\u0436\u0434\u0438"}):Object(d.jsx)(f.Provider,{value:c,children:Object(d.jsx)(b.Provider,{value:L,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(h,{setisLoggedIn:s}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(y,{isOpen:G,onClose:$,onRegisration:function(e,t){console.log(e,t),T.signUp(e,t).then((function(e){localStorage.setItem("jwt",e.data._id),localStorage.setItem("email",e.data.email),s(!0),Z(!0)})).catch((function(e){return console.log(e)}))}})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(S,{onLogin:function(t,n){console.log(t,n),T.signIn(t,n).then((function(t){localStorage.setItem("jwt",t.token),s(!0),e.push("/")})).catch((function(e){return console.log(e)}))}})}),Object(d.jsx)(k,{path:"/",commponent:Object(d.jsx)(_,{onEditProfile:function(){H(!0)},onAddPlace:function(){F(!0)},onEditAvatar:function(){D(!0)},onCardClick:function(e){X(e)},handleCardDelete:function(e){var t=e._id;I.deleteCard(t).then((function(){ae(ne.filter((function(e){return e._id!==t})))})).catch((function(e){return console.log(e)}))},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));I.changeLikeCardStatus(e._id,!t).then((function(t){ae((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},setCards:ae,cards:ne})})]}),Object(d.jsx)(O,{}),Object(d.jsx)(v,{isOpen:V,onClose:$,onUpdateUser:function(e,t){I.patchUserInfo(e,t).then((function(e){U(e),$()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(C,{isOpen:M,onClose:$,onUpdateAvatar:function(e){I.patchUserImg(e).then((function(e){U(e),$()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(N,{isOpen:R,onClose:$,onAddCard:function(e,t){I.addCard(e,t).then((function(e){ae([e].concat(Object(r.a)(ne))),$()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(x,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-card",isOpen:"",onClose:$,submitButtonText:"\u0414\u0430"}),Object(d.jsx)(g,{card:W,onClose:$})]})})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},X=n(8);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(X.a,{children:Object(d.jsx)(w,{})})}),document.getElementById("root")),W()}},[[37,1,2]]]);
//# sourceMappingURL=main.21bb3995.chunk.js.map