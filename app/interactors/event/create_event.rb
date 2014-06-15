class Event::CreateEvent
  include Interactor

  def setup
    context[:tag_list] = context[:tag_list].split(',') unless context[:tag_list].nil?
    context[:picture] = Picture.find(context.delete :picture_id) unless context[:picture_id].nil?
  end

  def perform
    context[:event] = Event.new(context)
    event.save
    fail! errors: event.errors unless event.valid?
  end
end
