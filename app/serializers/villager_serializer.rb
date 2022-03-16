class VillagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :birthday, :personality, :image, :likes
end
