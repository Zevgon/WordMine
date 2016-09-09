# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!({username: "Demo User", password: "password"})
User.create!({username: "Jennifer", password: "Jennifer"})
User.create!({username: "Johann", password: "password"})
User.create!({username: "Ludwig", password: "password"})
User.create!({username: "Steve", password: "password"})

Dir.entries('./lib/assets').reject{|f| f =~ /^\./}.each do |tree_name|
  Tree.create!({name: tree_name})
end

Tree.all.map{|tree| [tree.name, tree.id]}.each do |tree_arr|
  tree_name = tree_arr[0]
  tree_id = tree_arr[1]
  path = "./lib/assets/#{tree_name}"
  filenames = Dir.entries(path).reject{|f| f =~ /^\./}
  word_lists = []
  filenames.each_with_index do |filename, idx|
    word_list_title = filename.sub(/\..+/, "")
    unlocked_status = idx == 0 ? true : false
    word_list = WordList.create!({title: word_list_title, tree_id: tree_id})
    word_lists << word_list
    word_pairs = File.readlines("#{path}/#{filename}").map(&:chomp)
    word_pairs.each do |word_pair|
      pair_arr = word_pair.split(": ")
      Word.create!({word: pair_arr[0], word_list_id: word_list.id, translation: pair_arr[1]})
    end
  end
end

TreesUser.create!({user_id: 1, tree_id: 1})

word_lists = Tree.find(1).word_lists
word_lists.each_with_index do |word_list, idx|
  unlocked_status = idx == 0 ? true : false
  new_node = Node.create!({word_list_id: word_list.id,
                           title: word_list.title,
                           tree_id: 1,
                           user_id: 1,
                           unlocked: unlocked_status
  })
  if idx != word_lists.length - 1
    new_node_child_id = new_node.id + 1
    new_node.update!({child_id: new_node_child_id})
  end
end
