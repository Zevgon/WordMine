class WordList < ApplicationRecord
  validates :title, :tree_id, presence: true
  has_many :nodes
  has_many :words
  belongs_to :tree
end
