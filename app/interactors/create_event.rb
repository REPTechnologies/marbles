class CreateEvent
  include Interactor

  def perform
    @event = Event.new(event_params)
    @event.save      
  end
  
end
