class Node < ApplicationRecord
  validates :title, :tree_id, :word_list_id, :user_id, presence: true
  belongs_to :tree
  belongs_to :user
  belongs_to :word_list
  has_one :child,
    foreign_key: :id,
    primary_key: :child_id,
    class_name: :Node
end
