class Island < ApplicationRecord
  MAX_VILLAGERS_PER_ISLAND = 8

  belongs_to :user

  has_many :visitors,  dependent: :destroy
  has_many :villagers, through: :visitors, before_add: :check_villagers_limit

  validates :user_id, uniqueness: true

  private

  def check_villagers_limit(_villager)
    raise VillagerLimitExceeded if villager.size >= MAX_VILLAGERS_PER_ISLAND
  end

end
