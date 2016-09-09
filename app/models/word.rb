class Word < ApplicationRecord
  validates :word, :translation, :word_list_id, presence: true
  belongs_to :word_list
end
