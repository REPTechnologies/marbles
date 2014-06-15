class Picture::CreatePicture
  include Interactor

  def perform
    context[:picture] = Picture.new(context)
    picture.save
    fail! errors: picture.errors unless picture.valid?
  end
end