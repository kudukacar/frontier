class Indicator < ApplicationRecord
  validates :year, :value, :country_id, :code_id, presence: true

  belongs_to :country,
  primary_key: :id,
  foreign_key: :country_id,
  class_name: :Country

  belongs_to :code,
  primary_key: :id,
  foreign_key: :code_id,
  class_name: :Code
end