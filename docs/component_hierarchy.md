<h3> SplashPage </h3>

<h3> AuthFormContainer </h3>

  * AuthForm

<h3> ChooseLanguage </h3>

  * LanguageChoice

<h3> NodeContainer </h3>

  * ProgressBarContainer
    * ProgressPiece
  * ForeignWord
  * GuessField
  * CheckButton

<h3> ProfileContainer </h3>

  * LanguageIndex

<h3> TreeContainer </h3>

  * Language Header
  * Nodes

<h3> NavContainer </h3>
  * Nav


# Routes
| Path | Component     |
| :------------- | :------------- |
| '/sign-up-sign-in' | AuthFormContainer |
| '/users/:userId/choose' | ChooseLanguage |
| '/users/:userId/languages/:languageId/node/:nodeId' | NodeContainer |
| '/users/:userId/profile' | ProfileContainer |
| '/users/:userId/languages/:languageId' | TreeContainer |
