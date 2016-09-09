json.name @tree.name
json.id @tree.id
json.nodes do
  json.array! @nodes do |node|
    json.node_id node.id
    json.unlocked node.unlocked
    json.completed node.completed
  end
end
