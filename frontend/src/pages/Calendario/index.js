import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { TextField } from '@material-ui/core'; // Importação corrigida
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onEventAdded }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState("");

  const handleSelectSlot = ({ start }) => {
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      start: new Date(selectedDate),
      end: new Date(selectedDate),
    };

    onEventAdded(newEvent);
    setModalIsOpen(false);
    setEventTitle('');
    setEventDescription('');
    setSelectedDate("");
  };

  const messages = {
    today: 'Hoje',
    previous: 'Anterior',
    next: 'Próximo',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        messages={messages}
        className="react-big-calendar"
      />
      {modalIsOpen && (
        <div className="modal">
          <h2>Agendar Evento</h2>
          <TextField
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            type="datetime-local"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            InputProps={{
              style: {
                border: 'none', // Remove a borda
              },
            }}
          />
          <input
            type="text"
            placeholder="Título do Evento"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="input-field"
          />
          <textarea
            placeholder="Descrição do Evento"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="text-area"
          ></textarea>
          <button onClick={handleAddEvent}>Agendar</button>
          <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
