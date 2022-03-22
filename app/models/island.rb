class Island < ApplicationRecord
  belongs_to :user

  has_many :visitors
  has_many :villagers, through: :visitors
end
