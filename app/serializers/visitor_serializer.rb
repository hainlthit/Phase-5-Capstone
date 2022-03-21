class VisitorSerializer < ActiveModel::Serializer
  attributes :id
  has_one :villager
  has_one :island
end
