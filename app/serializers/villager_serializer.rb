class VillagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :birthday, :personality, :image, :likes, :created_by

  has_many :visitors
  has_many :islands, through: :visitors



end
