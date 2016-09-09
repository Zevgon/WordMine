json.array! @language_choices do |language_choice|
  json.extract! language_choice, :id, :name
  json.currentUserTrees current_user.trees
end
