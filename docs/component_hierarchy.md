<h3> AuthFormContainer </h3>

  * AuthForm

<h3> ChooseLanguage </h3>

  * LanguageChoice
  * NextButton

<h3> NodeContainer </h3>

  * ProgressBarContainer
    * ProgressPiece
  * ForeignWord
  * GuessField
  * CheckButton

<h3> ProfileContainer </h3>

  * LanguageIndex
    * LanguagePercentage
    * StudyButton

<h3> TreeContainer </h3>

  * LanguageHeader
  * Stats
  * Nodes
    * Node

<h3> NavBar </h3>



# Routes
| Path | Component     |
| :------------- | :------------- |
| '/sign-up-sign-in' | AuthFormContainer |
| '/users/:userId/choose' | ChooseLanguage |
| '/users/:userId/languages/:languageId/node/:nodeId' | NodeContainer |
| '/users/:userId/profile' | ProfileContainer |
| '/users/:userId/languages/:languageId' | TreeContainer |
