class Villager < ApplicationRecord

    has_many :visitors
    has_many :islands, through: :visitors

end
