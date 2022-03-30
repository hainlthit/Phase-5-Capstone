class Visitor < ApplicationRecord

  
  belongs_to :villager
  belongs_to :island

  validates :villager_id, uniqueness: true
end
