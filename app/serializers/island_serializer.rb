class IslandSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user

  has_many :visitors
  has_many :villagers, through: :visitors
end
