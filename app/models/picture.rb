class Picture < ActiveRecord::Base
  mount_uploader :image, PictureUploader
  belongs_to :event, :inverse_of => :picture
  
  def url
    image.url
  end
  
  def thumb_url
    image.thumb.url
  end
end
