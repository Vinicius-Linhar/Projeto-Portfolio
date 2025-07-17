function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Você pode me encontrar nas redes sociais:</p>
      <ul>
        <li><a href="
        " target="_blank">Facebook</a></li>
        <li><a href="https://www.linkedin.com/in/vinicius-dev/" target="_blank">LinkedIn</a></li>
        <li><a href="
        " target="_blank">GitHub</a></li>
        <li><a href="mailto:
        ">Email</a></li>
        </ul>
        <p>Ou me enviar uma mensagem diretamente:</p>
        <form>
            <label>Nome:</label>
            <input type="text" name="name" required />
            <label>Email:</label>    
            <input type="email" name="email" required />
            <label>Mensagem:</label>
            <textarea name="message" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>
  );
}   

export default Contact;