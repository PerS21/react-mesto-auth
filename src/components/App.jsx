import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import "../App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ImagePopup from "./ImagePopup.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { IsLoginContext } from '../contexts/IsLoginContext';

import api from '../utils/api.js';
import singApi from '../utils/singApi.js';



function App() {

  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setisLoading] = useState(true);


  const [currentUser, setСurrentUser] = useState({ name: "", about: "", avatar: "", _id: "", cohort: "" });

  useEffect(() => {
    api.getUser().then((res) => setСurrentUser(res)).catch(error => console.log(error))
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(name, description) {
    api.patchUserInfo(name, description)
      .then((res) => {
        setСurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(error))
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserImg(avatar)
      .then((res) => {
        setСurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(error))
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCards().then(res => setCards(res)).catch(error => console.log(error));
  }, []);

  function handleCardDelete(card) {
    const cardId = card._id;

    api.deleteCard(cardId)
      .then(() => {
        setCards(cards.filter(card => card._id !== cardId))
      })
      .catch(error => console.log(error));
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard(name, link)
      .then((res) => { setCards([res, ...cards]); closeAllPopups() })
      .catch(error => console.log(error));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(error => console.log(error));
  };

  function handleRegisration(mail, password) {
    console.log(mail, password)
    singApi.signUp(mail, password)
      .then((res) => {
        localStorage.setItem('jwt', res.data._id);
        localStorage.setItem('email', res.data.email);
        setIsLoggedIn(true);
        setIsInfoTooltipOpen(true);
      })
      .catch(er => console.log(er))
  }

  function handleLogin(mail, password) {
    console.log(mail, password)
    singApi.signIn(mail, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        history.push('/')
      })
      .catch(er => console.log(er))
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      singApi.check(jwt)
        .then(() => {
          setIsLoggedIn(true)
        })
        .catch(er => console.log(er))
        .finally (()=>{setisLoading(false)})
      history.push('/')
    } else {
    setisLoading(false);
    }
  }, []);

  if (isLoading) { return <div>жди</div> }
  else {
    return (
      <IsLoginContext.Provider value={isLoggedIn}>
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
            <div className="page__container">
              <Header setisLoggedIn={setIsLoggedIn} />

              <Switch>
                <Route path="/sign-up">
                  <Register isOpen={isInfoTooltipOpen} onClose={closeAllPopups} onRegisration={handleRegisration} />
                </Route>
                <Route path="/sign-in">
                  <Login onLogin={handleLogin} />
                </Route>
                <ProtectedRoute path="/" commponent={<Main
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  handleCardDelete={handleCardDelete}
                  handleCardLike={handleCardLike}
                  setCards={setCards} cards={cards}
                />}>
                </ProtectedRoute>
              </Switch>

              <Footer />
              <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
              <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
              <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit} />

              <PopupWithForm title='Вы уверены?' name='delete-card' isOpen='' onClose={closeAllPopups} submitButtonText='Да' />

              <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
          </div>
        </CurrentUserContext.Provider >
      </IsLoginContext.Provider>
    );
  }
}


export default App;
