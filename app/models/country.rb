class Country < ApplicationRecord
  validates :name, :code, presence: true

  has_many :indicators,
  primary_key: :id,
  foreign_key: :country_id,
  class_name: :Indicator
end