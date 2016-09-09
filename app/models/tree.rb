class Tree < ApplicationRecord
  validates :name, presence: true
  has_many :nodes
  has_many :word_lists
  has_and_belongs_to_many :users
end
