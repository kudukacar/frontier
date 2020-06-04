class Indicator < ApplicationRecord
  validates :name, :code, :year, :value, :country_id, presence: true

  belongs_to :country,
  primary_key: :id,
  foreign_key: :country_id,
  class_name: :Country
end