json.array! @trees do |tree|
  json.extract! tree, :id, :name
end
