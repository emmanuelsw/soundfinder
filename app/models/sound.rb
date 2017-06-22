class Sound < ApplicationRecord

  include SoundUploader::Attachment.new(:sound)

  validates :name, presence: true

  belongs_to :user

end
