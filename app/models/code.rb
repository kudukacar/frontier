class Code < ApplicationRecord
  validates :name, :code, presence: true

  has_many :indicators,
  primary_key: :id,
  foreign_key: :code_id,
  class_name: :Code
end