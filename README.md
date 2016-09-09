# WordMine

WordMine is a web application inspired by Duolingo. It uses a Postgres database and a React frontend, implementing Redux for controlling data flow.

<h2> Security </h2>
Users' information is kept extremely secure. WordMine uses BCrypt to hash users' passwords and create password_digests. It uses SecureRandom.urlsafe_base64(32) to create session tokens. Passwords themselves are never stored anywhere and session tokens only live in the database and are kept off the front end. When requests are made to the database, WordMine implements strong parameters to prevent users from being able to make requests with malicious data.
<br />

<h3>Database</h3>
The seeds file creates data dynamically, which makes it easy to add content to the site. When the seeds file runs, it creates trees based on the names of the folders in `'lib/assets'`:

```
Dir.entries('./lib/assets').reject{|f| f =~ /^\./}.each do |tree_name|
  Tree.create!({name: tree_name})
end
```

Then it creates `WordList`s based on the filenames within those folders, and creates `Word`s based on the content of those files:

<h3>Redux Cycles</h3>
WordMine's Redux cycles use several custom middlewares, which trigger the necessary requests to the backend.

<h3> Models and Controllers </h3>
WordMine has the following models:
  * User
  * Tree
  * Node
  * Word
  * TreesUser
  * WordList

Each model validates its most important info. There are also database-level validations. The `TreesUser` model represents connections between users and the languages they study. The `WordList` model exists in order to avoid creating duplicate words. This works because users have their own nodes, which are created when the user chooses a language. Without a `WordList` model, new words would have to be created every time a node is created so that associations could be set up properly. With the `WordList` model, new nodes simply store a word_list_id, which points to the appropriate `WordList`, which `has_many` `Word`s.


The controllers are:
  * UsersController
  * SessionsController
  * TreesController
  * NodesController
  * TreesUsersController

All controllers live in an API folder and JSON is set as the default format for all responses. Requests to the controllers are triggered by React components and sent in the form of $.ajax requests. Responses are formatted using JBuilder. <br /><br />
A WordsController was not necessary because requests to the `NodesController`'s show method sends back a node which contains an array of the words that belong to its `WordList`:

  ```
  json.array! @node.word_list.words.shuffle
  ```

The TreesUsersController's purpose is to receive `POST` requests from the ChooseLanguage component. It creates the user's nodes, creates a new `TreesUser` object, and renders its show method, which returns the appropriate tree and node data to display on the `Tree` page.

<h3> Associations </h3>
Since users can study many languages and languages can be studied by many users, WordMine sets up a many-to-many relationship between users and trees. To accomplish this, the database has a join table, `trees_users`. Each `Node` `belongs_to` a `User`, a `Tree`, and a `WordList`. Since each node (except for the last one in a tree) unlocks the next node in its tree, each one has its own child node. A `WordList` `has_many` `Word`s.

<h3> Trees </h3>
The trees table has a `name` and an `id` column. After a user signs up, the `ChooseLanguage` component is rendered. This component queries the database for all the names of the languages that the user isn't currently studying. The reason it works this way is that users will later have the option to add a language to the ones they're studying, which also uses the `ChooseLanguage` component.

<h3> Nodes </h3>
The nodes table has columns for `completed` and `unlocked`, among others. These attributes are used to determine the background color of the nodes when they get rendered on the tree page and whether or not they can be clicked on. When a user clicks on a node, it triggers a request to the `NodesController`'s show method, which renders JSON of that node's words. The WordIndex component displays the words for the user to study. When the user clicks the ready button and goes to the quiz (the `Node` component), the node page's `componentDidMount` method also sends a request to the `NodesController`'s show method, but displays the words in the format of a quiz.


<h3> Routers </h3>
WordMine uses `'react-router'` for routing. The root route uses `Provider` from `'react-redux'` to pass the store to its children. It renders the AppRouterContainer, which

<h2> Next Steps </h2>
Some features that I plan on adding to WordMine:
  * Pictures for user profiles
  * Use Google translate API to:
    * allow users to create their own nodes
    * collect data for many more languages
