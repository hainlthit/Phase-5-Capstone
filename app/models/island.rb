class Island < ApplicationRecord
  belongs_to :user

  has_many :visitors, dependent: :destroy
  has_many :villagers, through: :visitors

  validates :user_id, uniqueness: true
end
