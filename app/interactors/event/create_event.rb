class CreateEvent
  include Interactor

  def perform(event_params)
    @event = Event.new(event_params)
    @event.save if @event.valid?
  end
end
