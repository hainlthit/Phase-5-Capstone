class VillagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :birthday, :personality, :image, :likes, :created_by
end
