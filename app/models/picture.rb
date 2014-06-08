class Picture < ActiveRecord::Base
  mount_uploader :image, PictureUploader
  belongs_to :event, :inverse_of => :picture
end
